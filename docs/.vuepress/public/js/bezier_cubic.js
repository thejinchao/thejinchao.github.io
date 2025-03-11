class CubicBezierLine {
	constructor(_p0, _p1, _p2, _p3, _step, _uniformSpeedMode) {
		this.step=_step;
		this.points=[];
		this.uniformSpeedMode=_uniformSpeedMode;
		this.updatePoints(_p0, _p1, _p2, _p3);
	}
	
	position(t) {
		let it = 1-t;
		let x = it*it*it*this.p0.x + 3*it*it*t*this.p1.x +
			3*it*t*t*this.p2.x + t*t*t*this.p3.x;
		let y =it*it*it*this.p0.y + 3*it*it*t*this.p1.y +
			3*it*t*t*this.p2.y + t*t*t*this.p3.y;
		return {x:x, y:y}
	}
	
	speed(t) {
		let it = 1-t;
		let sx = -3 * this.p0.x*it*it + 3*this.p1.x*it*it - 
			6*this.p1.x*it*t + 6*this.p2.x*it*t - 3*this.p2.x*t*t + 3*this.p3.x*t*t;
		let sy = -3 * this.p0.y*it*it + 3*this.p1.y*it*it - 
			6*this.p1.y*it*t + 6*this.p2.y*it*t - 3*this.p2.y*t*t + 3*this.p3.y*t*t;
		return Math.sqrt(sx*sx+sy*sy);
	}
	
	length(t){
		//使用simpson算法的分割数
		const TOTAL_SIMPSON_STEP = 1000;
		//分割份数
		let stepCounts = Math.floor(TOTAL_SIMPSON_STEP*t);
		if(stepCounts & 1) stepCounts++;	//偶数
		if(stepCounts==0) return 0.0;
		
		let halfCounts = stepCounts/2;
		let sum1=0.0, sum2=0.0;
		let dStep = t/stepCounts;
		
		for(var i=0; i<halfCounts; i++) {
			sum1 += this.speed((2*i+1)*dStep);
		}
		
		for(var i=1; i<halfCounts; i++) {
			sum2 += this.speed((2*i)*dStep);
		}
		
		return (this.speed(0.0) + this.speed(1.0)+2*sum2+4*sum1)*dStep/3.0;
	}
	
	length_from_table(t) {
		//通过查表获取t对应的曲线长度
		if(t<=0) return 0;
		if(t>=1.0) return this.length_table[this.length_table.length-1];
		
		let step=t*this.step;
		let low_bounder = Math.floor(step);
		let lerp = step-low_bounder;
		
		return this.length_table[low_bounder]*(1-lerp)+this.length_table[low_bounder+1]*lerp;
	}
	
	//根据t推导出匀速运动自变量t'的方程(使用牛顿切线法)
	invertLength(t, target_length) {
		let t1 = t, t2;
		do {
			t2 = t1 - (this.length_from_table(t1)-target_length)/this.speed(t1);
			if(abs(t1-t2)<0.00001) break;
			t1=t2;
		}while(true);
		return t2;
	}
 
	updatePoints(_p0, _p1, _p2, _p3) {
		this.p0=_p0;
		this.p1=_p1;
		this.p2=_p2;
		this.p3=_p3;
		
		let ax = this.p0.x - 2 * this.p1.x + this.p2.x;
		let ay = this.p0.y - 2 * this.p1.y + this.p2.y;
		let bx = 2 * this.p1.x - 2 * this.p0.x;
		let by = 2 * this.p1.y - 2 * this.p0.y;

		this.A = 4 * (ax * ax + ay *ay);
		this.B = 4 * (ax * bx + ay *by);
		this.C = bx * bx + by * by;
		
		this.points.length = 0;
		let totalLength = this.length(1);
		
		//构建一个length table
		this.length_table=[];
		for (let index = 0; index <= this.step; index++) {  
			let t = index / this.step;
			this.length_table.push(this.length(t));
		}
		
		for (let index = 1; index < this.step; index++) {  
			let t = index / this.step;
			let target_length=totalLength*t;
			
			if(this.uniformSpeedMode) {
				t = this.invertLength(t, target_length);
			}
			
			this.points.push(this.position(t));
		}
	}
	
	draw() {
		this.points.forEach(pt => {
			fill('green');
			ellipse(pt.x, pt.y, 5, 5);
		});
	}
}
