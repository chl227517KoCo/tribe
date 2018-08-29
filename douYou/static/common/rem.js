/**
 * Created by banana.cao on 2018/8/21.
 */
(function(d, w) {
  const doc = d.documentElement;
  function rem() {
    const width = Math.min(doc.getBoundingClientRect().width, 758);
    doc.style.fontSize = width / 7.5 + 'px';
  }
  rem();
  w.addEventListener('resize', rem);
})(document, window);
