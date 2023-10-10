const AudioComponent = () => {
  return (
    <article>
      <h1>Title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        adipisci possimus? Nisi blanditiis ratione quia, inventore
        necessitatibus possimus, voluptas nesciunt quidem facilis reiciendis
        quis accusamus commodi neque quo vel nulla?
      </p>
      <audio src="rabbit320.webm" controls>
        <p>
          Tu navegador no soporta HTML5 video. Aquí está el
          <a href="rabbit320.webm">enlace del video</a>.
        </p>
      </audio>
    </article>
  );
};

export default AudioComponent;
