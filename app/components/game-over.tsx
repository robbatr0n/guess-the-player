type Props = {
  score: number;
};

export const GameOver = ({ score }: Props) => {
  return (
    <section className="flex relative z-10 flex-col items-center">
      <article className="mx-auto text-center text-white prose lg:prose-xl">
        <h1 className="mt-8 text-white lg:mt-12 xl:mt-16">Game Over</h1>
        <p className="">score: {score}</p>
      </article>
    </section>
  );
};
