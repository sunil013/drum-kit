import { useEffect } from "react";
import wSound from "../../sounds/crash.mp3";
import aSound from "../../sounds/kick-bass.mp3";
import sSound from "../../sounds/snare.mp3";
import dSound from "../../sounds/tom-1.mp3";
import jSound from "../../sounds/tom-2.mp3";
import kSound from "../../sounds/tom-3.mp3";
import lSound from "../../sounds/tom-4.mp3";
import "./index.css";

const DrumPage = () => {
  const onClickButton = (letter) => {
    makeSound(letter);
    makeAnimation(letter);
  };
  const onKeyPressed = (event) => {
    const updatedKey = isNaN(event.key) ? event.key.toLowerCase() : event.key;
    makeSound(updatedKey);
    makeAnimation(updatedKey);
  };
  const makeSound = (key) => {
    switch (key) {
      case "w":
        const tom1 = new Audio(wSound);
        tom1.play();
        break;
      case "a":
        const tom2 = new Audio(aSound);
        tom2.play();
        break;
      case "s":
        const tom3 = new Audio(sSound);
        tom3.play();
        break;
      case "d":
        const tom4 = new Audio(dSound);
        tom4.play();
        break;
      case "j":
        const snare = new Audio(jSound);
        snare.play();
        break;
      case "k":
        const crash = new Audio(kSound);
        crash.play();
        break;
      case "l":
        const kickBass = new Audio(lSound);
        kickBass.play();
        break;
      default:
        return null;
    }
  };

  const makeAnimation = (currentKey) => {
    const wordsArr = ["w", "a", "s", "d", "j", "k", "l"];
    if (wordsArr.includes(currentKey)) {
      const activeButton = document.querySelector("." + currentKey);
      activeButton.classList.add("pressed");
      setTimeout(function () {
        activeButton.classList.remove("pressed");
      }, 200);
    }
  };

  useEffect(() => {
    document.title = "Drum Kit";
  }, []);

  return (
    <div className="drum-page" onKeyDown={onKeyPressed} tabIndex={0}>
      <h1 id="title">Drum 🥁 Kit</h1>
      <div className="set">
        <button
          className="w drum"
          type="button"
          onClick={() => onClickButton("w")}
        >
          w
        </button>
        <button
          className="a drum"
          type="button"
          onClick={() => onClickButton("a")}
        >
          a
        </button>
        <button
          className="s drum"
          type="button"
          onClick={() => onClickButton("s")}
        >
          s
        </button>
        <button
          className="d drum"
          type="button"
          onClick={() => onClickButton("d")}
        >
          d
        </button>
        <button
          className="j drum"
          type="button"
          onClick={() => onClickButton("j")}
        >
          j
        </button>
        <button
          className="k drum"
          type="button"
          onClick={() => onClickButton("k")}
        >
          k
        </button>
        <button
          className="l drum"
          type="button"
          onClick={() => onClickButton("l")}
        >
          l
        </button>
      </div>

      <footer>Nuron.</footer>
    </div>
  );
};

export default DrumPage;
