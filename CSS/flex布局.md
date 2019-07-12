任何一个容器都可以指定为Flex布局  
行内元素：display: inline-flex  
Webkit内核浏览器：display: -webkit-flex/*Safari*/;display: flex  
注意：设置为Flex布局之后，子元素的float,clear和vertical-align属性都将失效  

1、基本概念  
水平是主轴和交叉的主轴，主轴开始的位置（与边框的交叉点）叫做main start，结束位置叫做  
main end，交叉轴开始的位置叫做cross start，结束位置叫做cross end。  
项目默认沿主轴排列，单个项目占据空间的位置叫做main size，交叉轴空间叫做cross size  
  
2、容器的属性  
flex-direction  
flex-wrap  
flex-flow  
justify-content  
align-items  
align-content  
  
flex-direction属性：  
row（横向排列，主轴为水平方向，起点在左端）  
row-reverse（横着反向排列，主轴为水平方向，起点在右端）  
column（竖向排列，主轴为垂直方向，起点在上面）  
column-reverse（竖着反向排列，主轴为垂直方向，起点在下面）  

flex-wrap属性：   
nowrap：默认，不换行   
wrap：换行，第一行在上方  
wrap-reverse：换行，第一行在下方

flex-flow属性：  
flwx-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap   
flex-flow: (flex-direction) || (flex-wrap)  

justify-content属性：   
flex-start(默认值):左对齐   
flex-end:右对齐  
center: 居中  
space-between:两端对齐，项目之间的间隔都相等   
space-around:两个项目两侧的间距相等。项目之间的间距比项目与边框的间距大一倍   

align-items属性：   
flex-start:交叉轴的起点对齐   
flex-end：交叉轴的终点对齐   
center：交叉轴的中点对齐   
baseline：项目的第一行文字的基线对齐   
stretch(默认值)：如果项目未设置高度或设为auto，将沾满整个容器的高度。   

align-content属性：   
定义了多根轴线的对齐方式，如果只有一条轴线，该属性不起作用   
flex-start:与交叉轴的起点对齐   
flex-end:与交叉轴的终点对齐    
center:与交叉轴的中点对齐    
space-between:与交叉轴两端对齐，轴线之间的间隔平均分布
space-around:每根轴线两侧的间隔都相等，轴线之间的间隔比轴线与边框的间隔大一倍    
stretch(默认值):轴线沾满整个交叉轴   


项目的属性：   
  
order属性：    
order:(integer) 定义项目的排列顺序，数值越小，排列越靠前，默认为0   
    
flex-grow属性：   
flex-grow:(number) 项目的放大比例，默认为0，即如果存在剩余空间，也不放大   
     
flex-shrink属性：   
flex-shrink: (number) 项目的缩小比例，默认为1，即如果空间不足，该项目将缩小   
如果项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小，如果一个项目的flex-shrink   
属性都为0，其他项目都为1，则空间不足时，前者不缩小，负值对该属性无效     

flex-basis属性：   
定义在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空   
间，她的默认值为auto，即项目的本来大小。   
flex-basis: (length) | auto /*default auto*/   
他可以设为跟width或height属性一样的值（如350px），即项目将占据固定空间    
   
flex属性：    
flex属性是flex-grow,flex-shrink和flex-basis的简写，默认值为0 1 auto,后两个属性可选。     
flex: none | [('flex-grow')('flex-shrink')?||('flex-basis')]    
该属性有两个快捷值：auto(1 1 auto)和none(0 0 auto)    
   
align-self属性：   
允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承   
父元素的align-items属性，如果没有父元素，则等同于stretch   
auto   
flex-start   
flex-end   
center   
baseline   
stretch