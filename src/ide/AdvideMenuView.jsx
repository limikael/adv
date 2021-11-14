export default function AdvideMenuView(props) {
	let saveMenuItem;

	if (props.model.supportsFileSystemAccess()) {
		saveMenuItem=(
			<li>
				<a class="dropdown-item" href="#"
						onclick={props.model.dispatcher("saveStory")}>
					Save
				</a>
			</li>
		)
	}

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
							<a class="nav-link dropdown-toggle"
									href="#" 
									id="navbarDropdown" 
									role="button" 
									data-bs-toggle="dropdown" 
									aria-expanded="false">
								File
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown"
									style={{top: "2rem"}}>
								<li>
									<a class="dropdown-item" href="#"
											onclick={props.model.dispatcher("newStory")}>
										New Story
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#"
											onclick={props.model.dispatcher("openStory")}>
										Open Story...
									</a>
								</li>
								{saveMenuItem}
								<li>
									<a class="dropdown-item" href="#"
											onclick={props.model.dispatcher("saveStoryAs")}>
										Save As...
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}