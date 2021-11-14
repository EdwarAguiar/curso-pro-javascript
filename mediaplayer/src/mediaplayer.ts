class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  //Aqui es donde se crean los contenedores de forma Dinamica
  initPlayer() {
    this.container = document.createElement('div');
    // Aqui le agrega CSS - Style Position='relative' al Padre - Para usar Absolute en los hijos.
    this.container.style.position = 'relative';
    // Con insertBefore podemos decir que el container va antes del media
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }
}

export default MediaPlayer;
