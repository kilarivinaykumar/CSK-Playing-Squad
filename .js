const maincrick=document.getElementById('crick');
const crick=[
    {
        name:"Kasi Viswanadham",
        dob:"19 June 1958",
        age:"66 years",
        birthplace:"Chennai",
        gender:"Male",
        role:"CEO Of CSK Team",
        image:"https://images.indiafantasy.com/wp-content/uploads/20220623192406/Kasi-Viswanathan-CSK-CEO.jpg",
        

},
    {
        name:"Ms Dhoni",
        dob:"7 July 1981",
        age:"42 years",
        birthplace:"Ranchi",
        gender:"Male",
        role:"Batsman,Wicket Keeper",
        image:"https://media.gettyimages.com/id/1250852977/photo/chennai-super-kings-captain-mahendra-singh-dhoni-watches-the-ball-after-playing-a-shot-during.jpg?s=612x612&w=0&k=20&c=hXOpFrsbGPHdeT2uloDHZiP0ZpXqM7pmMLJeREb8t1s="
        

},
{
    name:"Rutu Raj",
    dob:"31 January 1997",
    age:"23 years",
    birthplace:" Pune ",
    gender:"male",
    image:"",
    role:"Batsman",
    image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/322200/322236.png",

},
{
    name:"Shivam Dube",
    dob:"26 June 1993 ",
    age:"30 years",
    birthplace:"Mumbai",
    gender:"Male",
    role:"Batsman",
    image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/211.png",

},
{
    name:"Jadeja",
    dob:"06 December 1988",
    age:"35 years",
    birthplace:"Navagam",
    gender:"male",
    role:"Batsman",
    image:"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_640,q_50/lsci/db/PICTURES/CMS/316600/316600.png",

},
{
    name:"Devon Conway",
    dob:"8 July 1991",
    age:"32 years",
    birthplace:"Johannesburg, Transvaal Province, South Africa",
    gender:"male",
    role:"Batsman",
    image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/601.png",


},
{
    name:"Ajinkya Rahane",
    dob:"6 June 1988 ",
    age:"35 years",
    birthplace:"Ashwi KD, Maharashtra, India",
    gender:"male",
    role:"Batsman",
    image:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYHzt91ba4efjgAcmxle7wzJK-dJ2RkpH1aUYHG7dlt8k71y3J",
},{
    name:"Deepak Chahar",
    dob:"7 August 1992 ",
    age:" 31 years",
    birthplace:"Agra",
    gender:"male",
    role:"Allrounder",
    image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSIlqaw6QBgJ0r6YyAnizGmf8bweU6DbujsDWSkEn57U144rgtT",

},{
    name:"Patirana",
    dob:"18 December 2002 ",
    age:"21 years",
    birthplace:"Kandy, Sri Lanka",
    gender:"male",
    role:"Bowler",
    image:"https://cdn.dnaindia.com/sites/default/files/2023/05/06/2588498-matheesha-pathirana.jpg?im=FitAndFill=(1200,900)",
},
{
    name:"Theekshana",
    dob:"1 August 2000",
    age:"23 years",
    birthplace:" Colombo, Sri Lanka",
    gender:"male",
    role:"Spinner",
    image:"https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTqe4jMvEXj6ACbh-iPC7Z8YpEoWYz4zEP4EtKqJAWe78wN2UEwSXEwSLeSCTM5hyfEzGirjO3D4V3Qcp0",
},
{
    name:"Moeen Ali",
    dob:"18 June 1987",
    age:" 36 years)",
    birthplace:"Birmingham, United Kingdom",
    gender:"male",
    role:"Allrounder",
    image:"https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSQdFvDHEqjwgENU1QX0JQy928LU2Z_45AXLqAZXKmNQ6-u0yzTuZEhIKd6uR-m5LeJxuz2bGp3aLTeEF4",

},
{
    name:"Santer",
    dob:"5 February 1992",
    age:"31 years",
    birthplace:" Hamilton, New Zealand",
    gender:"male",
    role:"Spinner",
    image:"https://admin.thecricketer.com/weblab/Sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/mitchsantnerheadshot-min.jpg",
},
{
    name:"Robin Uthappa",
    dob:"11 November 1985",
    age:"38 years",
    birthplace:"Kodagu",
    gender:"male",
    role:"Batsman",
    image:"https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSGHHckYARwXeYsnkyguPQ2TwO_mexWJ73gqAJmCByBxE52yGS4wuy0Es3mCd29Tmy20Gvncmq0lBwPU2s",

},
{
    name:"Ashish Nehra",
    dob:"29 April 1979 ",
    age:"44 years",
    birthplace:"Delhi",
    gender:"male",
    role:"Bowler",
    image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWk6N4B_6BGItnZzXpvZQfUbYpzKReseE5d7aXBX99q8TD8ELj",

},
{
    name:"Shardhul Thakur",
    dob:"16 October 1991 ",
    age:" 32 years",
    birthplace:"Palghar",
    gender:"male",
    role:"Allrounder",
    image:"http://t2.gstatic.com/images?q=tbn:ANd9GcTrY1KjdbU_oLa_LZM_XARP8K2dQT-u0LON7jC5HOr67wflAzyIoli7MFYno-GdSp7lS02g",

},
{
    name:"Rachin Ravindra",
    dob:"18 November 1999 ",
    age:"24 years",
    birthplace:"Wellington, New Zealand",
    gender:"male",
    role:"Allrounder",
    image:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202311/ezgif-sixteen_nine_202.jpg?size=948:533",

},
{
    name:"Daryl Mitchell",
    dob:"May 20, 1991",
    age:"32 years",
    birthplace:"Hamilton",
    gender:"male",
    role:"Allrounder",
    image:"https://pbs.twimg.com/media/FhQKw3WakAA_Glc?format=jpg&name=large",

},
{
    name:"Stephen Fleming", 
    dob:"1 April 1973",
    age:"50 years",
    birthplace:"Christchurch, New Zealand",
    gender:"male",
    role:"CSK Batting Coach",
    image:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkE1u1Oah6GgdCr4NXjG7dg8mtINy8R_FPOvvSI4ChpjfeADK9",

},
{
    name:"DJ Bravo",
    dob:"7 October 1983 ",
    age:"40 years",
    birthplace:" Santa Cruz, Trinidad and Tobago",
    gender:"male",
    role:"Allrounder",
    image:"https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/07/Bravo-dancing-AFP-ms-tzcchqgsvt-scaled.jpg?size=*:900",

},


]
console.log(crick.length)
crick.forEach(function (cook) 
{
    console.log(cook)
    const subdiv=document.createElement('div')
    const n=document.createElement('h2')
    n.textContent="Name:"+cook.name
    const a=document.createElement('p')
    a.textContent="Age:"+cook.age
    const d=document.createElement('p')
    d.textContent="Dob: "+cook.dob
    const r=document.createElement('p')
    r.textContent="Role:"+cook.role
    const b=document.createElement('p')
    b.textContent="Birth Place:"+cook.birthplace
    const image=document.createElement('img')
    image.src=cook.image
    image.setAttribute('alt', cook.name)
    image.height="180"
    image.width="210"
    
    subdiv.append(n,image,d,b,a,r)
    subdiv.classList.add('kvk')
    maincrick.appendChild(subdiv)
})
