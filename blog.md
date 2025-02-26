---
layout: default
title: "Blog"
description: "Read insightful articles by Wilfrida Were on data analytics, data cleaning, visualization, and AI. Stay updated with the latest trends and techniques."
---

{% if site.show_excerpts %}
  {% include home.html %}
{% else %}
  {% include archive.html title="Posts" %}
{% endif %}
