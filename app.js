const evidence = [
  {
    title: 'Submission record',
    detail: 'Primary source · received 2026-08-15',
    status: 'VERIFIED',
    state: 'ok'
  },
  {
    title: 'Service log',
    detail: 'Primary source · serial number matches',
    status: 'VERIFIED',
    state: 'ok'
  },
  {
    title: 'Photographic evidence',
    detail: 'Metadata consistent; origin not independently signed',
    status: 'LIMITATION',
    state: 'warn'
  },
  {
    title: 'Replacement estimate',
    detail: 'Two synthetic vendors disagree by 18%',
    status: 'CONFLICT',
    state: 'block'
  },
  {
    title: 'Authority requirement',
    detail: 'Authorized reviewer must approve final disposition',
    status: 'HUMAN',
    state: 'warn'
  }
];

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderEvidence() {
  const list = document.querySelector('#evidenceList');
  if (!list) return;

  for (const item of evidence) {
    const row = createElement('div', 'evidence');
    const dot = createElement('span', `dot ${item.state === 'ok' ? '' : item.state}`.trim());
    dot.setAttribute('aria-hidden', 'true');

    const copy = createElement('div');
    copy.append(
      createElement('div', 'e-title', item.title),
      createElement('div', 'e-sub', item.detail)
    );

    row.append(dot, copy, createElement('span', 'pill', item.status));
    list.append(row);
  }
}

function activateNavigation() {
  const buttons = document.querySelectorAll('[data-target]');
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.dataset.target);
      if (!target) return;

      for (const peer of buttons) {
        peer.classList.remove('active');
        peer.removeAttribute('aria-current');
      }
      button.classList.add('active');
      button.setAttribute('aria-current', 'page');
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

renderEvidence();
activateNavigation();
