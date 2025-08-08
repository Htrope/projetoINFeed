import './style.css';
import chaveEsquerda from '../../assets/chaveEsquerda.png';
import chaveDireita from '../../assets/chaveDireita.png';
import I from '../../assets/IMaiusculo.png';
import N from '../../assets/NMaiusculo.png';
import j from '../../assets/j.png';
import u from '../../assets/u.png';
import n from '../../assets/n.png';
import i from '../../assets/i.png';
import o from '../../assets/o.png';
import r from '../../assets/r.png';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="in-logo">
          <img src={chaveEsquerda} alt="{" />
          <img src={I} alt="I" />
          <img src={N} alt="N" />
          <img src={chaveDireita} alt="}" />
        </div>
        <div className="junior">
          <img src={j} alt="j" />
          <img src={u} alt="u" />
          <img src={n} alt="n" />
          <img src={i} alt="i" />
          <img src={o} alt="o" />
          <img src={r} alt="r" />
        </div>
      </div>

      <h1 className="feed-title">Feed</h1>
    </header>
  );
}
