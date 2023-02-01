import { useLoginStore } from "../src/store/loginStore"

const Loged = () => {
	const isLoged = useLoginStore(state => state.isLoged)
	const name = useLoginStore(state => state.name)

	if (isLoged) {
		return (
			<div>
				<h1>Se ha logueado con exito</h1>
				<h2>nombre : {name}</h2>
			</div>
		)
	} else {
		return "Loading..."
	}
}

export default Loged
