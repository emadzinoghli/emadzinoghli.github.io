
window.MathJax = {
    loader: {load: ['[tex]/mathtools']},
    tex: {
      inlineMath: [['\\(', '\\)']],
      packages: {'[+]': ['mathtools']}
    },
    svg: {
      fontCache: 'global'
    }
  };

  (function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-chtml-full.js';
    script.async = true;
    document.head.appendChild(script);
  })();