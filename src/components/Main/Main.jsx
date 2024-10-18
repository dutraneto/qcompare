import ToolTip from 'components/ToolTip/ToolTip'
import Weather from 'components/Weather/Weather'
import FormView from '../Form/FormView'
import Canvas from 'components/Canvas/Canvas'

function Main(props) {
  const { toolTip, isChristmas } = props
  const { title, description } = toolTip

  return (
    <>
      {isChristmas && <Canvas />}
      <main className="bg-white dark:bg-black p-6">
        <section className="flex flex-col sm:flex-row gap-5 mb-5">
          <ToolTip title={title} description={description} />
          <Weather />
        </section>
        <section className="py-6 mb-5 rounded">
          <FormView />
        </section>
      </main>
    </>
  )
}

export default Main
