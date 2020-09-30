---
layout: default
---

# The Goodreads Classics By Average Rating

This plot displays the most popular "classic" literary texts according to <a href="https://www.goodreads.com/genres/classics"> Goodreads users </a>. The X-axis displays the publication date of the classic text. The Y-axis displays how many Goodreads ratings the classic text has received

The colors represent the average Goodreads rating (1-5 stars ★) for each text.
- 🔴  Red points = higher average ratings
- 🟢  Green points = lower average ratings


<iframe src="Goodreads-Classics-Ratings-Plot.html" sandbox="allow-same-origin allow-scripts" width="110%"
    height="900"
    scrolling="no"
    seamless="seamless"
    frameborder="0"></iframe>

## More About This Plot

You can hover over each point to see more information about the text. You can also search and highlight texts by typing in the name of the text or author in the search box above.  You can explore a [standalone version of this plot here](Goodreads-Classics-Ratings-Standalone.html).

\*Note that you need to type in the full name of the title or author, e.g., *The Adventures of Huckleberry Finn* as opposed to *Huckleberry Finn*.

This plot was made with the Python data visualization library [Bokeh](https://docs.bokeh.org/en/latest/index.html).