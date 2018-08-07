var r=20
var g=30
var b=50
num=6
min_font_size=12;

var ratio
var fib=[]
fib[0]=1
fib[1]=2
sum=3

function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(2);

  //Build fibo
  for (var i=2;i<num;i++){
    fib[i]=fib[i-1]+fib[i-2]
    sum+=fib[i]
    print(fib[i])  
  } 
  
  //text
  for (var i=1;i<num;i++){
  	ratio=fib[i]/(fib[1])
  	fill(ratio*r,ratio*g,ratio*b);
  	font_size=min_font_size*fib[i]/fib[1]
  	textSize(font_size );
  	print("font size is" + font_size)
  	text("pandot", 50,40*ratio);
    //ellipse(40*ratio+40, 100,10*ratio,10*ratio);
    //print("height of the ellipse"+10*ratio)
  }
}