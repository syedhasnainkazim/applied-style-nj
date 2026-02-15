import { useEffect, useRef, useState } from "react";

export default function Game() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);

  const WIDTH = 300;
  const HEIGHT = 400;

  const PLAYER_WIDTH = 30;
  const PLAYER_HEIGHT = 50;
  const ENEMY_WIDTH = 30;
  const ENEMY_HEIGHT = 50;

  const laneCenters = [
    WIDTH / 6,
    WIDTH / 2,
    (WIDTH * 5) / 6,
  ];

  let currentLane = 1;
  let player = {
    x: laneCenters[currentLane] - PLAYER_WIDTH / 2,
    y: HEIGHT - 70,
  };

  let enemies = [];
  let roadOffset = 0;
  let localScore = 0;

  /* ============================= */
  /* LOAD LEADERBOARD */
  /* ============================= */

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("apsLeaderboard")) || [];
    setLeaderboard(saved);
  }, []);

  /* ============================= */
  /* GAME LOOP */
  /* ============================= */

  useEffect(() => {
    if (gameOver) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && currentLane > 0) currentLane--;
      if (e.key === "ArrowRight" && currentLane < 2) currentLane++;
    };

    const handleTouch = (e) => {
      const touchX = e.touches[0].clientX;
      const screenWidth = window.innerWidth;

      if (touchX < screenWidth / 2 && currentLane > 0) {
        currentLane--;
      } else if (touchX >= screenWidth / 2 && currentLane < 2) {
        currentLane++;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouch);

    function spawnEnemy() {
      const lane = Math.floor(Math.random() * 3);
      enemies.push({
        lane,
        x: laneCenters[lane] - ENEMY_WIDTH / 2,
        y: -60,
        counted: false,
      });
    }

    let spawnTimer = 0;

    function generateCode() {
      const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
      let code = "";
      for (let i = 0; i < 8; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
      }
      return code;
    }

    function update() {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

      const speed = 3 + Math.floor(localScore / 5);

      ctx.fillStyle = "#111";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      /* ROAD LINES */
      roadOffset += speed;
      if (roadOffset > 40) roadOffset = 0;

      ctx.fillStyle = "white";

      for (let i = 0; i < 10; i++) {
        ctx.fillRect(WIDTH / 3 - 2, i * 60 + roadOffset, 4, 30);
        ctx.fillRect((WIDTH / 3) * 2 - 2, i * 60 + roadOffset, 4, 30);
      }

      /* PLAYER */
      player.x =
        laneCenters[currentLane] - PLAYER_WIDTH / 2;

      ctx.fillStyle = "#3b82f6";
      ctx.fillRect(
        player.x,
        player.y,
        PLAYER_WIDTH,
        PLAYER_HEIGHT
      );

      /* ENEMIES */
      spawnTimer++;
      if (spawnTimer > 60) {
        spawnEnemy();
        spawnTimer = 0;
      }

      enemies.forEach((enemy, index) => {
        enemy.y += speed;

        ctx.fillStyle = "#ef4444";
        ctx.fillRect(
          enemy.x,
          enemy.y,
          ENEMY_WIDTH,
          ENEMY_HEIGHT
        );

        if (enemy.y > player.y && !enemy.counted) {
          enemy.counted = true;
          localScore++;
          setScore(localScore);

          if (localScore === 20) {
            setDiscountCode(generateCode());
          }
        }

        if (
          enemy.lane === currentLane &&
          enemy.y + ENEMY_HEIGHT > player.y &&
          enemy.y < player.y + PLAYER_HEIGHT
        ) {
          setGameOver(true);
        }

        if (enemy.y > HEIGHT) enemies.splice(index, 1);
      });

      ctx.fillStyle = "#3b82f6";
      ctx.font = "14px Arial";
      ctx.fillText("Score: " + localScore, 10, 20);

      if (!gameOver) {
        animationRef.current =
          requestAnimationFrame(update);
      }
    }

    update();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [gameOver]);

  const saveScore = () => {
    if (!playerName) return;

    const newEntry = { name: playerName, score };

    const updated = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    localStorage.setItem(
      "apsLeaderboard",
      JSON.stringify(updated)
    );

    setLeaderboard(updated);
    setPlayerName("");
  };

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
    setDiscountCode("");
  };

  return (
    <section className="min-h-screen bg-dark text-white pt-28 pb-20 flex justify-center">
      <div className="card p-6 w-full max-w-md text-center space-y-6">

        <h1 className="text-xl md:text-2xl font-bold">
          Avoid The Traffic 🚗
        </h1>

        <p className="text-gray-400 text-sm">
          Tap left or right side to change lanes.
        </p>

        <canvas
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          className="mx-auto rounded-lg bg-black w-full max-w-[300px]"
        />

        {!gameOver && (
          <p className="text-primary font-medium">
            Score: {score}
          </p>
        )}

        {gameOver && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-red-400">
              You crashed 😢
            </p>

            <p>Your Score: {score}</p>

            {score >= 20 && (
              <div className="animate-success space-y-2">
                <p className="text-primary font-semibold">
                  🎉 You won a 10% discount!
                </p>
                <p className="text-sm">
                  Code:{" "}
                  <span className="font-mono">
                    {discountCode}
                  </span>
                </p>
                <p className="text-xs text-gray-500">
                  Please notify us about this code.
                </p>
              </div>
            )}

            <input
              placeholder="Enter your name"
              value={playerName}
              onChange={(e) =>
                setPlayerName(e.target.value)
              }
              className="input"
            />

            <button
              onClick={saveScore}
              className="btn-outline w-full"
            >
              Save Score
            </button>

            <button
              onClick={resetGame}
              className="btn-primary w-full"
            >
              Play Again
            </button>
          </div>
        )}

      </div>
    </section>
  );
}