---
layout: default
---

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">

# **What do Goodreads users talk about in their reviews of "classic" books?**

This heatmap represents the probability that Goodreads reviews for a given <a href="https://www.goodreads.com/genres/classics">classic</a> would discuss or contain one of the 30 topics on the left. These topics were produced by topic modeling 120,000+ Goodreads reviews of classic books.
      
- Darker tiles indicate a higher probability of containing the topic
- Lighter tiles indicate a lower probability of containing the topic

You can hover over each tile to see more information, including the words from the Goodreads reviews that make up each "topic" (e.g., "School" = "school", "high", "class", "english").
  
  <div id="my_dataviz"></div>

  

  <script src="https://d3js.org/d3.v4.js"></script>

  <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>
  <script type="text/javascript" src="js/heatmap.js"></script>


## More About This Plot

To read this plot, it can be helpful to consider a few examples. If you scan left-to-right for the “School” topic, you will see that <i>To Kill a Mocking Bird</i>, <i>The Great Gatsby</i>, and <i>The Catcher in the Rye</i> have the darkest tiles in this row, which indicates that reviews of these books are most likely to discuss school-related subjects.
      
If you scan top-to-bottom for <i>Pride and Prejudice</i>, to take another example, you will see that the novel has darker tiles for the topics “Audiobooks & Adaptations,” “Marriage,” “Re-Readable,” and “Gushing & Loving Language.”

The topic probabilities have been normalized to highlight differences between the books. We check the significance of these results via 95% bootstrapped confidence intervals, and the majority of visible differences are significant. You can explore a [standalone version of this plot here](Goodreads-Classics-Topics-Standalone.html).

This plot was created with the JavaScript data visualization library [d3](https://d3js.org/). The code was inspired by and partly borrowed from [Yan Holtz](https://www.d3-graph-gallery.com/graph/heatmap_style.html).
