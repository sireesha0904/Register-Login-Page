import { Component, OnInit, HostListener } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styleUrls: ['./background-animation.component.css'],
})
export class BackgroundAnimationComponent implements OnInit {
  private canvas!: HTMLCanvasElement; // Use definite assignment assertion
  private ctx!: CanvasRenderingContext2D; // Use definite assignment assertion
  private particles: Particle[] = [];

  ngOnInit() {
    this.canvas = document.getElementById(
      'background-canvas'
    ) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.resizeCanvas();
    this.initParticles();
    this.animate();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeCanvas();
  }

  private resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private initParticles() {
    for (let i = 0; i < 100; i++) {
      this.particles.push(this.createParticle());
    }
  }

  private createParticle(): Particle {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.random() * 5 + 1,
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 - 1.5,
    };
  }

  private animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > this.canvas.width) {
        particle.speedX *= -1;
      }
      if (particle.y < 0 || particle.y > this.canvas.height) {
        particle.speedY *= -1;
      }

      this.ctx.fillStyle = '#EBD3F8'; // Particle color
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    requestAnimationFrame(() => this.animate());
  }
}
