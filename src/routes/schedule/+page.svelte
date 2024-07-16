<script lang="ts">
  import { base } from "$app/paths";
  const content = [
    "Opening Lecture and course expectations, What is C++? The C++ compiler, C++ developer environment setup",
    "Variables, Arithmetic, Input and Output, Boolean Variables and Operators,<br> The if Statement Comparing Numbers and Strings, Multiple Alternatives, Nested Branches",
    "Strings, Arrays, Memory (intro)",
    "while loops, for loops, do-while loops, input processing, intro to functions",
    "functions, parameters, pass by reference, pass by value, return values, random",
    "array's and 2D array problems, nested loops",
    "dynamic memory and pointers, * and & operators",
    "Day Off",
    "MIDTERM Exam",
    "classes and objects, header files",
    "No Classes Scheduled",
    "4th of July",
    "classes with member functions, public and private field variables",
    "dynamic memory and pointers with objects",
    "virtual functions and polymorphism",
    "vectors reading and writing from files and standard IO, recursion",
    "Final Review",
    "FINAL Exam",
  ];

  const dues = [
    "",
    "",
    "",
    "",
    "",
    "",
    "Project 1",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Project 2",
    "",
    "Project 3",
    "",
  ];

  const dates = [
    "05/28",
    "05/30",
    "06/04",
    "06/06",
    "06/11",
    "06/13",
    "06/18",
    "06/20",
    "06/25",
    "06/27",
    "07/02",
    "07/04",
    "07/09",
    "07/11",
    "07/16",
    "07/18",
    "07/23",
    "07/25",
  ];

  const iter = content.map((e, i) => {
    return { content: e, date: dates[i], due: dues[i] };
  });
</script>

<h2>Schedule</h2>

<table>
  <tr>
    <th> Date </th>
    <th class="content"> Content </th>
    <th> Due </th>
  </tr>

  {#each iter as c}
    <tr>
      <td>{c.date}</td>
      <td>{@html c.content}</td>
      <td>{c.due}</td>
    </tr>
  {/each}
</table>

<h3>
  <a href="../" class="highlight">../</a>
</h3>
