function buyTicketsBtn(params) {
    document.getElementById('buy-ticket').addEventListener('click', function () {
        const sectionPhparibahan = document.getElementById('section-phparibahan')
        sectionPhparibahan.scrollIntoView()
    })
}

const allBtn = document.getElementsByClassName('seat-btn');
let count = 0;
let minusCount = 40;
let btncount = 0;
// const allBtn = document.getElementsByClassName('seat-btn');

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', function() {
        if (btncount < 4) {
            btncount++;
        } else {
            alert('maximum seat selected')
        }
        count = count + 1;
        const cartSeat = document.getElementById('cart-seat')
        // console.log(cartSeat)
        cartSeat.innerText = count;

        allBtn[i].style.backgroundColor = '#1DD100';
        cartSeat.style.backgroundColor = '#1DD100';


        // const noSeat = 0;
        // const noSeatNum = noSeat.innerText
        // const 
        // console.log(noSeatNum)
        const seatLeft = document.getElementById('seat-left')
        const innerSeatLeft = seatLeft.innerText
        const numInnerSeatLeft = parseInt(innerSeatLeft)
        const newNumInnerSeatLeft = numInnerSeatLeft - 1
        seatLeft.innerText = newNumInnerSeatLeft



        const createElement = document.getElementById('create-element')
        // console.log(createElement)
        const div = document.createElement('div')
        const price = 550;
        // console.log(price)
        div.style.display = 'flex'
        div.style.justifyContent = 'space-between'

        const p1 = document.createElement('p')
        p1.innerText = btncount
        
        const p2 = document.createElement('p')
        p2.innerText = 'Economic'

        const p3 = document.createElement('p')
        p3.innerText = parseInt(price);
        p3.id = 'p3'

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        createElement.appendChild(div)
        const priceP3 = document.getElementById('p3')
        const numPriceP3 = parseInt(priceP3.innerText)
        // console.log(numPriceP3)




        const totalPrice = document.getElementById('total-price').innerText;
        // console.log(totalPrice)
        const convertedtotalCost = parseInt(totalPrice)
        document.getElementById('total-price').innerText = convertedtotalCost + parseInt(price)
        // console.log(totalPrice);

        // console.log(typeof totalCostNumber)
        const grandTotal = document.getElementById('grand-total').innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        const finalG = document.getElementById('grand-total').innerText = convertedtotalCost + parseInt(price)

        
        let num = 11;
        let numfinal 
        for (let i = 0; i < num ; i++) {
            let  number = array[i];
            console.log(numfinal)
            
        }
        const phoneNum = document.getElementById('phone-num')
        phoneNum.innerText = num;
        if (btncount === phoneNum) {
            removeEventListener('click')
        }

    })
}

    function next() {
        const fullweb = document.getElementById('full-web')
        fullweb.classList.add('hidden')
        const nextweb = document.getElementById('next-web')
        nextweb.classList.remove('hidden')
        // console.log(nextweb.classList)
        // nextweb.classList.remove('hidden')
        const footerhidden = document.getElementById('footer-hidden')
        footerhidden.classList.add('hidden')
    }


    function continueBtn() {
        const fullweb = document.getElementById('full-web')
        fullweb.classList.remove('hidden')
        // console.log('clicked')
        const nextweb = document.getElementById('next-web')
        nextweb.classList.add('hidden')
        // console.log(nextweb.classList)
        
    }
    






    //     


    //     // const noSeat = 0;
    //     // const noSeatNum = noSeat.innerText
    //     // const 
    //     // console.log(noSeatNum)
    //     const seatLeft = document.getElementById('seat-left')
    //     const innerSeatLeft = seatLeft.innerText
    //     const numInnerSeatLeft = parseInt(innerSeatLeft)
    //     const newNumInnerSeatLeft = numInnerSeatLeft - 1
    //     seatLeft.innerText = newNumInnerSeatLeft

    //     const selectedSeat = document.getElementById('selected-seat')
    //     selectedSeat.classList.remove('bg-slate-400')
    //     selectedSeat.classList.add('bg-[#1DD100]')
    //     // console.log(selectedSeat)


    //     const createElement = document.getElementById('create-element')
    //     // console.log(createElement)
    //     const div = document.createElement('div')
    //     const price = 550;
    //     console.log(price)
    //     div.style.display = 'flex'
    //     div.style.justifyContent = 'space-between'

    //     const p1 = document.createElement('p')
    //     p1.innerText = btn.innerText

    //     const p2 = document.createElement('p')
    //     p2.innerText = 'Economic'

    //     const p3 = document.createElement('p')
    //     p3.innerText = parseInt(price);
    //     p3.id = 'p3'

    //     div.appendChild(p1)
    //     div.appendChild(p2)
    //     div.appendChild(p3)
    //     createElement.appendChild(div)
    //     const priceP3 = document.getElementById('p3')
    //     const numPriceP3 = parseInt(priceP3.innerText)
    //     // console.log(numPriceP3)

    //     const totalPrice = document.getElementById('total-price').innerText;
    //     // console.log(totalPrice)
    //     const convertedtotalCost = parseInt(totalPrice)
    //     document.getElementById('total-price').innerText = convertedtotalCost + parseInt(price)
    //     // console.log(totalPrice);

    //     // console.log(typeof totalCostNumber)
    //     const grandTotal = document.getElementById('grand-total').innerText;
    //     const convertedGrandTotal = parseInt(grandTotal);
    //     const finalG = document.getElementById('grand-total').innerText = convertedtotalCost + parseInt(price)


    //     const applybtn = document.getElementById('apply-btn').addEventListener('click', function() {
    //         let coupon = 'NEW15';
    //         let coupon1 = 'Couple 20';
    //         const inputCoupon = document.getElementById('input-coupon')
    //         inputCoupon.innerText = 
    //             console.log(inputCoupon.innertext)
    //             const firstCoupon = document.getElementById('new15')
    //             console.log(inputCoupon.innerText)
                
    //             const secondCoupon = document.getElementById('couple20')    
    //             console.log(inputCoupon.innerText)

    //             if (inputCoupon === firstCoupon) {
    //                const discount = finalG * 20 / 100
    //                 const finalGroundValue = finalG - discount

    //             }
    //             else if (inputCoupon === secondCoupon) {
            
    //             }
    //     })

    // })

// }


// function apply() {
//     document.getElementById('apply-btn');
//     let coupon = 'NEW15';
//     let coupon1 = 'Couple 20';
//     // let finalGround total = 0;
//     const inputCoupon = document.getElementById('input-coupon').innerText.toUpperCase()
//     // console.log(inputCoupon)
//     const firstCoupon = document.getElementById('new15').innerText.toUpperCase()
//     // console.log(firstCoupon.innerText)
//     // firstCoupon.innerText
//     const secondCoupon = document.getElementById('couple20').innerText.toUpperCase()
//     // console.log(secondCoupon)
//     const grandTotal = document.getElementById('grand-total').innerText;
    
    // if (inputCoupon === firstCoupon) {


    // }
    // else if (inputCoupon === secondCoupon) {

    // }
// }


