(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = '☰';
    }));
  }

  const form = document.querySelector('#inquiry-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const text = [
        '〈가평에서 살아볼까〉 참여·협업 문의',
        '',
        `이름/팀명: ${data.get('name')}`,
        `연락처: ${data.get('contact')}`,
        `참여 방식: ${data.get('type')}`,
        `선호 기록 방식: ${data.get('record')}`,
        `핵심 질문: ${data.get('message') || '(미입력)'}`
      ].join('\n');
      if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
      const mail = window.prompt('문의 내용이 클립보드에 복사되었습니다. 운영자 이메일 주소를 입력하면 메일 앱을 엽니다.\n(취소하면 복사한 내용을 직접 전달할 수 있습니다.)', '');
      if (mail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
        window.location.href = `mailto:${mail}?subject=${encodeURIComponent('가평에서 살아볼까 참여·협업 문의')}&body=${encodeURIComponent(text)}`;
      } else {
        alert('문의 내용이 복사되었습니다. 이메일 또는 문자에 붙여넣어 전달해 주세요.');
      }
    });
  }
})();
