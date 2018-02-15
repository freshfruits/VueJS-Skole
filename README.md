<h1 align="center">
  <br>
  <a href="#"><img src="https://vuejs.org/images/logo.png" alt="VueJS" width="200"></a>
  <br>
  VueJS
  <br>
</h1>

<h4 align="center">Skole selv studie omkring VueJS og de små projekter som jeg har arbejdet på og notater som jeg har taget.</h4>

## Singlepage

Frameworks Examples:
 * Angular
 * VueJS
 
 **Advantages**: Highly reactive. Better user experience. Decoupled frontend.
 
Decoupled frontend: If you’re creating a SPA, you dont need to write any server-side code. Backend Devs will create an API, which you can reach out from your single page apllication from the frontend. 

The website re-render the pages. Part of the page is rerendered. We only get one page from the server. This one page also downloads a couple of assets, but usually a lot of javascripts. Because it is then the javascript code which will listen to url changes to clicks on links and then rerender parts of the DOM in the loaded page whenever we need to do something, when we “switch the page”, but we rerender it. 

Usually use frameworks like Reach, angular or vuejs for single page applications.

Note: VueJS and React can be used on the different pages of an MPA, you would add widgests or enhance parts of the pages with them. 

**Disadvantage**:
 * SEO is difficult.
 * Javascript strictly required. 
 * Tend to favor modern browser. 
 * Memory leaks.
 * Security. JS is less secure due to XSS. 

Crawlers can understand the page and even if you render it with js but have a big problem if you’re loading the content asynchronosusly and that happends a lot on single page applications. example the spinner on the site come and is loading. But the crawler doesnt know there will be more data to arrive, and this data will eventually be rendered on the page so to the crawler if you’re loading a list of blog articles doesnt know. 

Typically suppoert of modern SPA than old browsers. You won’t see IE8 support. 

Because even if we need to load some data from the single page application again. That happends behind the scene. But it will never get a html page back, but typically JSON data which javascript can parse it and render something on the page (Might see a spinner).  

## Credits

## License

MIT
