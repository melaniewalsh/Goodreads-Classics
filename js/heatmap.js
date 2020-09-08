
// set the dimensions and margins of the graph
var margin = {top: 200, right: 300, bottom: 100, left: 300},
  width = 1200 - margin.left - margin.right,
  height = 1100 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/melaniewalsh/Goodreads-Classics/master/data/Goodreads-Topics-By-Book-Cluster.csv?token=AE3CF3X647RTUOU5V3IXPSK7MEJOI", function(data) {

  // Labels of row and columns -> unique identifier of the column called 'Topics' and 'Classics'
  var myClassics = d3.map(data, function(d){return d.Classics;}).keys()
  var myTopics = d3.map(data, function(d){return d.Topics;}).keys()
  var myTopicWords = d3.map(data, function(d){return d['Topic Words'];}).keys()

  // Build X scales and axis:
  var x = d3.scaleBand()
    .range([ 0, width ])
    .domain(myClassics)
    .padding(0.05);
  svg.append("g")
    .style("font-size", 15)
.style("font-family", "Roboto")
    //.attr("transform", "rotate(-65)")
    .call(d3.axisTop(x).tickSize(0))
    .selectAll("text")  
    .style("text-anchor", "start")

    .attr("dx", ".8em")
    .attr("dy", "-.85em")
    .attr("transform", "rotate(-65)")
    .select(".domain").remove()

  // Build Y scales and axis:
  var y = d3.scaleBand()
    .range([ height, 0 ])
    .domain(myTopics)
    .padding(0.05);
  svg.append("g")
    .style("font-size", 15)
.style("font-family", "Roboto")
    .call(d3.axisLeft(y).tickSize(0))
    .select(".domain").remove()

  // Build color scale
  var myColor = d3.scaleSequential()
    .domain([-2,4])
    .interpolator(d3.interpolateYlGnBu)

  // create a tooltip
  var tooltip = d3.select("#my_dataviz")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "3px")
    .style("border-radius", "5px")
    .style("padding", "5px")
    .style("word-break", "break-word")
    .style("max-width", "200px")

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
      .style("text-align", "left")
      .style("position", "absolute")
    d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1)
  }
  var mousemove = function(d) {
    tooltip
    //.attr("class", "word-wrap")
      .html(`<b>Title:</b> <i>${d.Classics}</i> <br> <b>Topic:</b> ${d.Topics} <br>  <b>Topic Probability:</b> ${d3.format(".2f")(d.value)} <br><br><b>Topic Words:</b> ${d['Topic Words']}`)
      .style("left", (d3.mouse(this)[0]+500) + "px")
      .style("top", (d3.mouse(this)[1]+500) + "px")
        
      //.style("max-width", "200px")
	//.style("position", "absolute")
      
  }
  var mouseleave = function(d) {
    tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("stroke", "none")
      .style("opacity", 0.8)
  }

  // add the squares
  svg.selectAll()
    .data(data, function(d) {return d.Classics+':'+d.Topics;})
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.Classics) })
      .attr("y", function(d) { return y(d.Topics) })
      .attr("rx", 2)
      .attr("ry", 2)
      .attr("width", x.bandwidth() )
      .attr("height", y.bandwidth())
      .style("fill", function(d) { return myColor(d.value)} )
      .style("stroke-width", 2)
      .style("stroke", "none")
      .style("opacity", 0.8)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)

})

// Add title to graph
// svg.append("text")
//         .attr("x", 0)
//         .attr("y", -50)
//         .attr("text-anchor", "left")
//         .style("font-size", "22px")
//         .text("Heatmap of Goodreads Topics");

// Add subtitle to graph
// svg.append("text")
//         .attr("x", 0)
//         .attr("y", -20)
//         .attr("text-anchor", "left")
//         .style("font-size", "14px")
//         .style("fill", "grey")
//         .style("max-width", 400)
//         .text("A short description of the take-away message of this chart.");


