

const PaymentCard = ({firstPayment=0, amount=0, className}) => {
    return(
        <div className="bg-white/10 p-8 flex flex-col items-center w-fit rounded-xl">
            <p className="-500 font-extrabold text-2xl">Mondasi</p>
            <p className="text-2xl">${firstPayment} Primer mes</p>
            
            <p className="text-xl">después</p>
            <p className="font-bold text-5xl"><span className="text-xs self-start">$</span>{amount}</p>
            <p className="text-xs">cada mes</p>

            <button className="mt-4 py-2 px-20 rounded-full bg-purple-600 text-white">Suscribirse</button>

            <ul className="space-y-4 mt-4">
                <li>Acceso a todas las experiencias mondasi</li>
                <li>Evento para padres</li>
                <li>Seguimiento personalizado una vez al mes</li>
                <li>2 clases fijas a la semana</li>
                <li>Acceso a nuestra newsletter</li>
            </ul>

        </div>
    )
}


export default PaymentCard;