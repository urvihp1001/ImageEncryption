const canvas=document.querySelector("canvas");
const targetinput=document.querySelector("#target");
const encryptioninput=document.querySelector("#encryption");
const saveButton=document.querySelector("button");
let target;
let encryption;
canvas.width=300;
canvas.height=300;
targetinput.onchange=(e)=>
{
const img= new SimpleImage(targetinput);
img.setSize(500,500);
target=img;
};
encryptioninput.onchange=(e)=>
{
const img= new SimpleImage(encryptioninput);
img.setSize(500,500);
encryption=img;
};
saveButton.onclick=save;
function save()
{
    const img= new SimpleImage(300,300);
    for (let i=0;i<300;i++)
    {
       for (let j=0;j<300;j++)
    {
        const targetpixel=target.getPixel(i,j);
        const encryptionpixel=encryption.getPixel(i,j);
        const pixel=img.getPixel(i,j);
        pixel.setRed(getValue(targetpixel.getRed())/16+getValue(encryptionpixel.getRed()));
        pixel.setGreen(getValue(targetpixel.getGreen())/16+getValue(encryptionpixel.getGreen()));
        pixel.setBlue(getValue(targetpixel.getBlue())/16+getValue(encryptionpixel.getBlue()));
    } 
    }
    img.drawTo(canvas);
    let url=canvas
    .toDataURL("image/png")
    .replace("image/png","image/octet-stream")
    window.location.href=url;
}
function getValue(x)
{
    return x-(x%16);

}
