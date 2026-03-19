import { Card, CardContent } from "./ui/card";


export default function Features() {
  return (
    <section className='py-20 px-10 grid grid-cols-3 gap-6'>
      
      <Card>
        <CardContent className='p-6'>
          <h3 className="font-bold text-xl mb-2">Instalaciones modernas</h3>
          <p>Aulas equipadas con tecnología actual.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className='p-6'>
          <h3 className="font-bold text-xl mb-2">Formación profesional</h3>
          <p>Ciclos adaptados al mercado laboral.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className='p-6'>
          <h3 className='font-bold text-xl mb-2 p-0'>Ubicación privilegiada</h3>
          <p>En Mérida, junto al Acueducto de los Milagros.</p>
        </CardContent>
      </Card>

    </section>
  )
}