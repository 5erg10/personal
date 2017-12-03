var width = $("#aboutContent").outerWidth()+300,
    height = $("#aboutContent").outerHeight()+150,
    padding = 1.5, // separation between same-color nodes
    clusterPadding = 6, // separation between different-color nodes
    maxRadius = 12;

var currentBubble; 

var scale = (window.innerHeight/650);
var margin = {
  top: 10,
  right: 100,
  bottom: 0,
  left: -100
}

var nodes = [];
var centros = [];  

var radius = d3.scale.sqrt().range([3, 12]); 

var knowledgeMAp = [
    { name: 'Html5 + CSS', average: 95, type: 'front-end', index: 0, color: '#fb4e7b' },
    { name: 'D3js', average: 80, type: 'front-end', index: 0, color: '#fb4e7b' },
    { name: 'ReactJS', average: 70, type: 'front-end', index: 0, color: '#fb4e7b' },
    { name: 'AngularJS', average: 90, type: 'front-end', index: 0, color: '#fb4e7b' },
    { name: 'NodeJS', average: 60, type: 'Back-end', index: 1, color: '#21b3a0' },
    { name: 'APIrest', average: 50, type: 'Back-end', index: 1, color: '#21b3a0' },
    { name: 'MongoDB', average: 50, type: 'Back-end', index: 1, color: '#21b3a0' },
    { name: 'Unity', average: 60, type: 'VR', index: 2, color: '#295f48' },
    { name: 'WebVR', average: 90, type: 'VR', index: 2, color: '#295f48' },
    { name: 'ARKit', average: 80, type: 'AR', index: 3, color: '#c80e05' },
    { name: 'ARCore', average: 60, type: 'AR', index: 3, color: '#c80e05' },
    { name: 'Vuforia', average: 100, type: 'AR', index: 3, color: '#c80e05' },
    { name: 'Tango', average: 60, type: 'AR', index: 3, color: '#c80e05' }
];    

var m = 4; // number of distinct clusters

var coef3 = 0.45, coef2 = 1.8, coef = 4;

_.each(knowledgeMAp, function(values){    
    var angle1 = ((Math.PI*2)/m)*values.index;
    var cos = Math.cos(angle1);
    var sin = Math.sin(angle1);
    var coords = {  x: ((width/coef)*cos) + (width/coef2), y: ((height/4)*sin) + (height*coef3) };
    nodes.push( {
        id: values.name,
        name: values.name,
        type: values.type,
        cluster: values.index,
        radius: values.average/1.5,
        originalRadius: values.average/1.5,
        color: values.color,
        cx: coords.x-50,
        cy: coords.y
      })
    var data = _.find(centros, function(voteItem){ return voteItem.nombre == values.type; });
    if(data==undefined) {
        centros.push({nombre :values.type, px: coords.x-50 , py: coords.y - 60});
    }
})

console.log(centros);

var force = d3.layout.force()
    .nodes(nodes)
    .size([width, height])
    .gravity(.02)
    .charge(0)
    .on("tick", tick)
    .start();

var svg = d3.select("#aboutContent").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ") scale(" + scale + "," + scale + ")");

var node = svg.selectAll("circle")
    .data(nodes)
    .enter()
    .append("circle")
    .style("fill", function(d) { return d.color; })
    .style("cursor", "pointer")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.radius; })
    .attr("name", function(d) { return d.name; })
    .attr("type", function(d) { return d.type; })
    .attr("rOriginal", function(d) { return d.radius; })
    .on("mouseover", function (d) {
      d3.select(this).transition()
        .ease("cubic-out")
        .duration("500")
        .style("fill", "#bbbbbb");
        //.attr("r", d.radius+20);
    })
    .on("mouseout", function (d) {
      d3.select(this).transition()
        .ease("cubic-out")
        .duration("500")
        .style("fill", d.color);
        //.attr("r", d.radius);
    })
    .on("click", function (d) {
      d3.select(this).transition()
        .ease("cubic-out")
        .duration("500")
        .tween('radius', function(d) {
            currentBubble = d3.select(this);
            var i = d3.interpolate(d.radius, 200);
            return function(t) {
              d.radius = i(t);
              currentBubble.attr('r', function(d) { return d.radius; });
              force.nodes(nodes)
            }
          });
        force.start();
    })
    .call(force.drag);

labels(centros);

node.transition()
    .duration(3000)
    .delay(function(d, i) { return i * 5; })
    .attrTween("r", function(d) {
      var i = d3.interpolate(0, d.radius);
      return function(t) { return d.radius = i(t); };
    });

function labels(foci) {
  svg.selectAll(".label").remove();
  svg.selectAll(".label")
    .data(_.toArray(foci)).enter().append("text")
    .attr("id", function (d) {
      return d.nombre
    })
    .attr("class", "label")
    .attr("style", "cursor:default")
    .attr("style", "font-weight: normal")
    .style("font-size", function (d) {
      return height/40;
    })
    .style("cursor", "pointer")
    .attr("fill", "white")
    .text(function (d) {
      return d.nombre
    })
    .attr("transform", function (d) {
      return "translate(" + (d.px - ((d.nombre.length) * 3)) + ","+ d.py+")";
    })
}    

function gravity(alpha) {
  return function (d) {//d son los objetos de nodes
    d.y += (d.cy - d.y) * alpha;
    d.x += (d.cx - d.x) * alpha;
  };
}

function tick(e) {
  node.each(gravity(.08 * e.alpha))
    .each(collide(.6))
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    });
}

// Resolves collisions between d and all other circles.
function collide(alpha) {
  var quadtree = d3.geom.quadtree(nodes);
  return function (d) {
    var r = d.radius + radius.domain()[1] + padding,
      nx1 = d.x - r,
      nx2 = d.x + r,
      ny1 = d.y - r,
      ny2 = d.y + r;
    quadtree.visit(function (quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
          y = d.y - quad.point.y,
          l = Math.sqrt(x * x + y * y),
          r = d.radius + quad.point.radius + (d.color !== quad.point.color) * padding;
        if (l < r) {
          l = (l - r) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}