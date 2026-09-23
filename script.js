function addTask() {
            let input = document.getElementById("taskInput");
                let taskText = input.value.trim();

                    if (taskText === "") {
                            alert("Please enter a task.");
                                    return;
                                        }

                                            let taskList = document.getElementById("taskList");

                                                let newTask = document.createElement("li");

                                                        newTask.innerHTML = `
                                                            <label>
                                                                <input type="checkbox" onchange="updateProgress()">
                                                                        ${taskText}
                                                                            </label>
                                                                            <button class="remove-button" onclick="removeTask(this)" disabled>Remove</button>
                                                                            `;

                                                                                                    taskList.appendChild(newTask);

                                                                                                        input.value = "";

                                                                                                            updateProgress();
                                                                                                            }

                                                                                                            function updateProgress() {
                                                                                                                let checkboxes = document.querySelectorAll("#taskList input[type='checkbox']");

                                                                                                                    let completed = 0;

                                                                                                                        checkboxes.forEach(function(checkbox) {
                                                                                                                                if (checkbox.checked) {
                                                                                                                                            completed++;
                                                                                                                                                    }
                                                                                                                                                        });

                                                                                                                                                            let total = checkboxes.length;

                                                                                                                                                                let percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

                                                                                                                                                                        document.getElementById("progressText").textContent =
                                                                                                                                                                            percentage + "% Completed";

                                                                                                                                                                        checkboxes.forEach(function(checkbox) {
                                                                                                                                                                            checkbox.closest("li").querySelector(".remove-button").disabled = !checkbox.checked;
                                                                                                                                                                        });
                                                                                                                                                                            }

                                                                                                                                                                            function removeTask(button) {
                                                                                                                                                                            button.closest("li").remove();
                                                                                                                                                                                updateProgress();
                                                                                                                                                                                }