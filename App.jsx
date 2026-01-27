import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "talaga ba?",
      "Last chance, baby!",
      "ayaw mo talaga?",
      "You might regret this, baby ko :<",
      "pag isipan mo maigi please?",
      "Are you absolutely certain?",
      "This could be a mistake?",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          {/* IMAGE AFTER CLICKING YES */}
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            className="h-[260px] rounded-lg shadow-lg"
          />
          <div className="text-4xl md:text-6xl font-bold my-4">
            okay!!! kayat na ta!!!!
          </div>
        </>
      ) : (
        <>
          {/* ✨ YOUR CUSTOM GIF */}
          <img
            className="h-[280px] rounded-lg shadow-lg"
            src="https://media2.giphy.com/media/vPzbDN4rBxuvtpSpzF/giphy.gif"
          />

          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine?
          </h1>

          {/* ✅ YES / NO BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2 items-center mt-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}