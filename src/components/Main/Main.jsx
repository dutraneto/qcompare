import ToolTip from 'components/ToolTip/ToolTip'
import Quote from 'components/Quote/Quote'
import FormView from '../Form/FormView'
// import Canvas from 'components/Canvas/Canvas'

function Main(props) {
  return (
    <>
      {/* <Canvas /> */}
      <main className="bg-white dark:bg-slate-900 p-6">
        <section className="flex flex-col sm:flex-row gap-5  mb-5">
          <ToolTip {...props} />
          <Quote />
        </section>
        <section className="py-6 px-3 mb-5 shadow-sm rounded">
          <FormView />
        </section>
      </main>
    </>
  )
}

export default Main
