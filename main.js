const btn = document.querySelector('.wheel__btn');
const wheel = document.querySelector('.wheel__center');
const wheel__animation = document.querySelector('.wheel__animation');
const tablet__text1 = document.querySelector('.tablet__text1');
const tablet__text2 = document.querySelector('.tablet__text2');
const tablet1__win = document.querySelector('.tablet1__win');
const tablet2__win = document.querySelector('.tablet2__win');
const modal = document.querySelector('.modal');
const footer__item = document.querySelectorAll('.footer__item');
const logo__text = document.querySelectorAll('.logo__text');
const logo__casino = document.querySelector('.logo__casino');
const body = document.querySelector('.body');
const logo = document.querySelector('.logo');
const modal__link = document.querySelector('.modal__link');

btn.onclick = () => {
    if (wheel.classList.contains('spin1')) {
        wheel.classList.add('spin2');
        btn.classList.add('wheel__btn--disabled');
        tablet__text2.classList.add('tablet__text--hidden');
        setTimeout(() => {
            btn.classList.remove('wheel__btn--disabled');
            tablet2__win.classList.add('win--visible')
            modal.classList.add('modal--visible')
            footer__item.forEach(el => el.classList.add('footer__item--color'));
            logo__casino.classList.add('logo__casino--color')
            logo__text.forEach(el => el.classList.add('logo__text--color'));
            body.style.overflow = 'hidden'
            body.classList.add('body--bg');
        }, 4000)
        return;
    }
    wheel__animation.classList.add('wheel__animation--stop');
    wheel.classList.add('spin1')
    btn.classList.add('wheel__btn--disabled');
    tablet__text1.classList.add('tablet__text--hidden');
    setTimeout(() => {
        btn.classList.remove('wheel__btn--disabled');
        tablet1__win.classList.add('win--visible')
    }, 4000)
}

const url = new URL(window.location.href);
const params = url.searchParams;
const click = params.get('stag')

logo.href = `https://vovan8.fun?stag=${click}`
modal__link.href = `https://vovan8.fun?stag=${click}`

