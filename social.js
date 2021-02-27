(function () {
	document.getElementById("add").addEventListener("click", () => {
		function todaysDate() {
			var today = new Date();
			var dd = String(today.getDate()).padStart(2, "0");
			var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
			var yyyy = today.getFullYear();

			today = mm + "/" + dd + "/" + yyyy;
			return today;
		}
		function userComment() {
			var input = document.getElementById("comment").value;
			return input;
		}

		// console.log(userComment());
		// console.log(todaysDate());

		const comment = document.querySelector(".comments");

		const newComment = document.createElement("div");
		newComment.className = "comment";
		const container = document.createElement("div");
		container.className = "top";
		const username = document.createElement("h3");
		username.innerText = "Paige Blakeslee ";
		const input = document.createElement("p");
		input.innerText = userComment();
		const date = document.createElement("span");
		date.innerText = todaysDate();

		comment.append(newComment);
		newComment.append(container);
		container.append(username);
		container.append(date);
		newComment.append(input);
	});

	document.getElementById("moon").addEventListener("click", () => {
		function darkMode() {
			document.body.classList.toggle("dark-mode");
		}

		darkMode();
	});
})();
