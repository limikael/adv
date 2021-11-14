export default function AdvideMenuView(props) {
	function menuItem(label, fn, ...args) {
		return (
			<li>
				<a class="dropdown-item" href="#"
						onclick={props.model.dispatcher(fn, ...args)}>
					{label}
				</a>
			</li>
		);
	}

	let saveMenuItem;
	if (props.model.supportsFileSystemAccess())
		saveMenuItem=menuItem("Save","saveStory");

	return (
		<nav class="navbar navbar-expand navbar-light bg-light"
				style={{height: "2.5rem"}}>
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Advide</a>
				<button class="navbar-toggler" 
						type="button" data-bs-toggle="collapse" 
						data-bs-target="#navbarSupportedContent" 
						aria-controls="navbarSupportedContent" 
						aria-expanded="false" 
						aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto">
						<li class="nav-item dropdown">
							<a class="nav-link"
									href="#" 
									id="navbarDropdownFile"
									role="button" 
									data-bs-toggle="dropdown" 
									aria-expanded="false">
								File
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdownFile"
									style={{top: "2rem"}}>
								{menuItem("New Story","newStory")}
								{menuItem("Open Story...","openStory")}
								{saveMenuItem}
								{menuItem("Save As...","saveStoryAs")}
							</ul>
						</li>

						<li class="nav-item dropdown">
							<a class="nav-link"
									href="#" 
									id="navbarDropdownExamples"
									role="button" 
									data-bs-toggle="dropdown" 
									aria-expanded="false">
								Examples
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdownExamples"
									style={{top: "2rem"}}>
								{menuItem("Basic Example","loadExample","basic-example.yaml")}
								{menuItem("Choice Dialog","loadExample","choice.yaml")}
								{menuItem("Morning Story","loadExample","morning-story.yaml")}
							</ul>
						</li>
					</ul>

				</div>
			</div>
		</nav>
	)
}