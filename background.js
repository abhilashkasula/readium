const updateContent = () => {
  const url = window.location.href;
  const config = {
    credentials: 'omit',
    redirect: 'follow',
    mode: 'no-cors',
  };
  fetch(url, config)
    .then((data) => data.text())
    .then((html) => {
      const updated = html.replace(/<\/?noscript>/g, '');
      document.querySelector('html').innerHTML = updated;
    });
};

const isPremiumContent = () =>
  document.querySelector('#paywall-upsell-button-upgrade');

window.onload = () => isPremiumContent() && updateContent();
