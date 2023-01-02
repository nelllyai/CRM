const styles = new Map();

const loadStyles = url => {
  if (styles.has(url)) return styles.get(url);

  const stylesPromise = new Promise(resolve => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;

    link.addEventListener('load', () => {
      resolve();
    });

    document.head.append(link);
  });

  styles.set(url, stylesPromise);
  return stylesPromise;
};

export default loadStyles;
