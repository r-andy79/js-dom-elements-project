
# JS DOM Elements Project

See the live version of [JS DOM Elements](https://js-dom-elements-project.netlify.app/)

The purpose of the project was to learn how to create new DOM elements, look up the existing ones and add specific classes or attributes to them or update their content. This goal had to be accomplished without modifying HTML structure and using only JavaScript for DOM manipulations. 
The task consisted of two main parts:
* creating tooltips for specific elements on the website
* creating a list of content based on the object that was provided

As for the first part, there are two types of tooltips that are included in the website. They either display text message or an image. The goal was to create specific elements and add the content based on a tooltip type.

    <span class="tooltip" data-url="https://pl.wikipedia.org/wiki/J%C4%99zyk_skryptowy" data-tooltip-type="text" data-tooltip-content="Język skryptowy (ang. script language) – język programowania obsługujący skrypty[1]. Często służący do kontrolowania określonej aplikacji.">skryptowy</span>

    <span class="tooltip" data-url="https://pl.wikipedia.org/wiki/Strona_internetowa" data-tooltip-type="image"
    data-tooltip-content="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Firefox_57.0.png/640px-Firefox_57.0.png">stronach internetowych</span>

This was accomplished by using <em>if</em> instruction to determine the tooltip type and create new elements based on the information located within <em>data</em> attributes.

The second part of the project was to create a list of contents based on the object that was provided. First, I had to determine which elements were main titles by checking if they did not have parent elements.

![list of contents object fragment](assets/img/object_fragment.PNG)

## 💡 Technologies Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)