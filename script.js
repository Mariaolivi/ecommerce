let lista = document.getElementById('lista')
window.addEventListener("load",carregar)
    

// const listaDeBebidas = [
// {   
//    "nome": "Honda Civic R",
//     "descricao":"O Honda Civic Type R 2023 é um modelo esportivo que combina o desempenho estável da Honda com a versão mais recente do Type R de alto desempenho. Espera-se que tenha uma versão mais potente do motor turbo de 4 cilindros e 2.0 litros, que produziu nada menos que 305 cavalos de potência no modelo anterior.",
//     "preco": "R$ 429.900,00",
//     "url": "https://www.honda.com.br/automoveis/sites/hab/files/2023-05/01_Honda_Civic_Type-R_Frente_Lateral_Blue_Pearl.png"
// },
// {
//    "nome":  "Acura Integra",
//     "descricao":"O Acura Integra é um carro esportivo compacto que foi reintroduzido pela Acura após um hiato de mais de duas décadas. O novo Integra 2023 é um hatchback de quatro portas que oferece um design elegante, um interior luxuoso e uma série de recursos tecnológicos modernos.",
//     "preco": "R$ 160.000,00",
//     "url": "https://www.acura.com/-/media/Acura-Platform/Vehicle-Pages/INTEGRA/2023/gallery-page/Exterior/Detail/01-gallery-2023-Integra-front-view-driving.jpg?mw=1024&hash=0302DC5A46B86DDF5498E3E7FD7A52F4"
// },
// {
//     "nome" : "BMW M2",
//     "descricao":"O BMW M2 2023 é um carro esportivo compacto que oferece um desempenho impressionante. É alimentado por um motor de 6 cilindros em linha de 3.0 litros que produz 405 cavalos de potência e 406 lb-ft de torque.",
//     "preco": "R$ 375.000,00",
//     "url": "https://garagem360.com.br/wp-content/uploads/2022/10/6-1-1536x1024.jpg"
// },
// {
//     "nome" : "Audi A4",
//     "descricao":"O Audi A4 2023 é um sedan de luxo compacto que oferece um equilíbrio perfeito de desempenho, conforto e tecnologia. Ele vem com um motor turbo de 4 cilindros e 2.0 litros que produz 201 cavalos de potência.",
//     "preco": "R$ 400.000,00",
//     "url": "https://www.agoramotor.com.br/wp-content/uploads/2022/09/Audi-A4-Frente-1024x576.jpg"
// },
// {
//    "nome": "Mercedes-Benz C-Class",
//     "descricao":"O Mercedes-Benz C-Class 2023 é um sedan de luxo que oferece um interior sofisticado, uma série de recursos tecnológicos avançados e um desempenho impressionante. Ele vem com um motor turbo de 4 cilindros e 2.0 litros que produz 255 cavalos de potência.",
//     "preco": "R$ 375.000,00",
//     "url": "https://cars.usnews.com/static/images/Auto/custom/15179/2023_Mercedes-Benz_AMG_C_43_Angular_Front_1.jpg"
// },
// {
//     "nome" : "Honda Civic",
//     "descricao":"O Honda Civic 2023 é um sedan compacto que oferece um equilíbrio perfeito de desempenho, conforto e eficiência de combustível. Ele vem com um motor de 4 cilindros e 2.0 litros que produz 158 cavalos de potência.",
//     "preco": "R$ 259.900,00",
//     "url": "https://media.ed.edmunds-media.com/honda/civic/2023/oem/2023_honda_civic_sedan_sport_fq_oem_3_500.jpg"
// },
// {
//     "nome": "Mazda Mazda3",
//     "descricao":"O Mazda Mazda3 2023 é um carro compacto que oferece um design elegante, um interior de alta qualidade e um desempenho impressionante. Ele vem com um motor de 4 cilindros e 2.5 litros que produz 186 cavalos de potência.",
//     "preco": "R$ 176.500,00",
//     "url": "https://hips.hearstapps.com/hmg-prod/images/2023-mini-cooper-clubman-special-edition-101-1644270349.jpg?crop=0.988xw:0.439xh;0.00850xw,0.253xh&resize=980:*"
// },
// {
//    "nome": "Hyndai Elantra",
//     "descricao":"O Hyundai Elantra 2023 é um sedan compacto que oferece um design elegante, um interior espaçoso e uma série de recursos tecnológicos modernos. Ele vem com um motor de 4 cilindros e 2.0 litros que produz 147 cavalos de potência.",
//     "preco": "R$ 124.750,00",
//     "url": "https://media.ed.edmunds-media.com/hyundai/elantra/2024/oem/2024_hyundai_elantra_sedan_limited_fq_oem_1_815.jpg"
// },
// {
//    "nome" : "MINI Cooper",
//     "descricao":"O MINI Cooper 2023 é um hatchback compacto que oferece um design icônico, um interior de alta qualidade e um desempenho impressionante. Ele vem com um motor de 3 cilindros e 1.5 litros que produz 134 cavalos de potência.",
//     "preco": "R$ 199.990,00",
//     "url": "https://www.agoramotor.com.br/wp-content/uploads/2022/09/Mini-Cooper-4-Portas-1024x576.jpg"
// },
// {
//     "nome" : "Kia Rio",
//     "descricao":"O Kia Rio 2023 é um sedan compacto que oferece um design moderno, um interior confortável e uma série de recursos tecnológicos modernos. Ele vem com um motor de 4 cilindros e 1.6 litros que produz 120 cavalos de potência.",
//     "preco": "R$ 124.750,00",
//     "url": "https://www.kia.com/us/content/dam/kia/us/en/vehicles/rio/2023/gallery/exterior/gallery_rio_2023_exterior_2.jpg/_jcr_content/renditions/cq5dam.thumbnail.640.425.png"
// },
// ]

function carregar(){
    fetch(`https://run.mocky.io/v3/2b120be3-b7fd-4a4e-b4db-102ae52aee70`)
    .then((response) => response.json())
    .then( data => {
        data.map((Bebidas) => {
            lista.innerHTML += 
            `<div class="col">
            <div class="card" style="width: 17rem;">
                    <img src="${Bebidas.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${Bebidas.nome}</h5>
                        <p class="card-text">${Bebidas.descricao}</p>
                        <h4 class="card-text">${Bebidas.preco}</h4>
                        <a href="/checkout.html" class="btn btn-primary">Comprar</a>
            
                    </div>
            </div>
        </div>`
        })
    })
    
        
        

    
}