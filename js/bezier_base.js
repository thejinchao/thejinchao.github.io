
class Point {
	constructor(x, y){
		this.pos = createVector(x, y);
		this.radius = 10;
		this.isDragged = false;
		this.isBeingDragged = false;
	}

	get x(){ return this.pos.x; }
	get y(){ return this.pos.y; }
	set x(newVal){ this.pos.x = newVal; }
	set y(newVal){ this.pos.y = newVal; }
	set(x, y){ this.x = x; this.y = y; }

	containsXY(x, y){
		return dist(x, y, this.x, this.y) < this.radius;
	}

	handleMousePressed(){
		this.isDragged = this.containsXY(mouseX, mouseY);
		return this.isDragged;
	}

	handleMouseDragged(){
		this.set(mouseX, mouseY);
	}

	handleMouseReleased(){
		this.isDragged = false;
	}

	draw(){
		if (this.containsXY(mouseX, mouseY)){
			fill('red');
		}else {
			fill('gray');
		}
		stroke('black')
		ellipse(this.x, this.y, this.radius, this.radius);
	}
}

class LineSegments {
	constructor() {
		this.points = [];
	}
	
	addPoint(x,y) {
		this.points.push(new Point(x, y));
	}
	
	draw(){
		stroke('black')
		if(this.points.length>1) {
			for(let index=0; index<this.points.length-1; index++) {
				line(this.points[index].x, this.points[index].y, this.points[index+1].x, this.points[index+1].y);
			}
			this.points.forEach(pt => pt.draw())
		}
	}

	handleMousePressed(){
		const pointPressed = this.points.find(pt => pt.containsXY(mouseX, mouseY));
		if (pointPressed){
			pointPressed.isBeingDragged = true;
			return true;
		}
		return false;
	}

	handleMouseDragged(){
		const pointDragged = this.points.find(p => p.isBeingDragged);
		if (pointDragged) {
			pointDragged.set(mouseX, mouseY);
		}
	}

	handleMouseReleased(){
		this.points.forEach(p => { p.isBeingDragged = false; });
	}
}
