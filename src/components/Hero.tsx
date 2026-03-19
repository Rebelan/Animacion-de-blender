import Scene3D from "./Scene3D"
import { Button } from "./ui/button"


export default function Hero() {
  return (
    <section className='h-screen grid grid-cols-2'>
      
      {/* TEXTO */}
      <div className='flex flex-col justify-center px-12'>
        <h1 className='text-5xl font-bold mb-6'>
          IES Albarregas
        </h1>

        <p className='text-lg text-gray-500 mb-6'>
          Formación innovadora en el corazón de Mérida.
          Tecnología, futuro y oportunidades.
        </p>

        <div className='flex gap-4'>
          <Button>Visítanos</Button>
          <Button variant="outline">Más información</Button>
        </div>
      </div>

      {/* 3D */}
      <div className='h-full'>
        <Scene3D />
      </div>

    </section>
  )
}