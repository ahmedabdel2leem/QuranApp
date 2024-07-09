import localFonts from "next/font/local";

 const thuluth = localFonts({
    src:[
        {path : "../assets/fonts/thuluth-decorated.ttf"}],
        variable:"--font-thuluth"
})
const nano = localFonts({
    src:[
        {path : "../assets/fonts/NotoNaskhArabic-Regular.woff2"}],
        variable:"--font-nano"
})
const amiri = localFonts({
    src:[
        {path : "../assets/fonts/Amiri-Regular.woff"}],
        variable:"--font-amiri"
})
const myfont = localFonts({
    src:[
        {path : "../assets/fonts/p1.woff"}],
        variable:"--font-myfont"
})

export  {thuluth,nano,amiri,myfont}