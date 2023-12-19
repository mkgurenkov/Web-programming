<%@ page import="java.util.List" %>
<%@ page import="jakarta.servlet.http.HttpSession" %>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Lab1</title>
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
        <header id = "header" class="mainElement">Гуренков Максим Сергеевич, P3230, 1102</header>
        <main>
        <div id = "form" class="mainElement">
            <form id="inputForm" onsubmit="sendHtmlForm(); return false;">
                <div id="inputX" cmlass="formComponent">
                    <label class="inputLabels">Выберите X</label>
                    <label><input type="checkbox" class="xValue" value="-4" onclick="removeOtherSelections(this)">-4</label>
                    <label><input type="checkbox" class="xValue" value="-3" onclick="removeOtherSelections(this)">-3</label>
                    <label><input type="checkbox" class="xValue" value="-2" onclick="removeOtherSelections(this)">-2</label>
                    <label><input type="checkbox" class="xValue" value="-1" onclick="removeOtherSelections(this)">-1</label>
                    <label><input type="checkbox" class="xValue" value="0" onclick="removeOtherSelections(this)">0</label>
                    <label><input type="checkbox" class="xValue" value="1" onclick="removeOtherSelections(this)">1</label>
                    <label><input type="checkbox" class="xValue" value="2" onclick="removeOtherSelections(this)">2</label>
                    <label><input type="checkbox" class="xValue" value="3" onclick="removeOtherSelections(this)">3</label>
                    <label><input type="checkbox" class="xValue" value="4" onclick="removeOtherSelections(this)">4</label>
                    <span id="xError" class="error"></span>
                </div>

                <div id="inputY" class="formComponent">
                    <label class="inputLabels" for="yValue">Введите Y</label>
                    <input type="text" id="yValue" placeholder="(-3 ... 3)">
                    <span id="yError" class="error"></span>
                </div>

                <div id="inputR" class="formComponent">
                    <label class="inputLabels" for="yValue">Установите R</label>
                    <input type="text" id="rValue" value="0" readonly>
                    <input type="button" id="upButton" value="R+" onclick="changeRValue(this)">
                    <input type="button" id="downButton" value="R-" onclick="changeRValue(this)">
                    <span id="rError" class="error"></span>
                </div>

                <div id="formButtons" class="formComponent">
                <input type="submit" value="Отправить">
                <input type="reset" value="Очистить">
                </div>
            </form>
        </div>
        <div id = "canvasBlock" class="mainElement">
            <div>   
                <span id="canvasError" class="error"></span>
                <div><canvas id = "canvasElement" width="400px" height="400px"></canvas></div>
            </div>   
        </div>
        <div id = "output" class="mainElement">
            <div>
                <div id="timeBlock">current time: <text id="time">loading...</text></div>
                <div id="table"><table border="1" width="500px">
                    <thead>
                        <tr>
                            <th>x</th>
                            <th>y</th>
                            <th>r</th>
                            <th>hit</th>
                            <th>time (µs)</th>
                            <th>current time</th>
                        </tr>
                    </thead>
                <tbody align="center" id="tableBody">
                    <% List<TableRow> table = (List<TableRow>) session.getAttribute("table");
                       for (int i = 0; i < table.size(); i ++) { %>
                           <tr>
                           <td> <%= table.get(i).getX() %></td>
                           <td> <%= table.get(i).getY() %></td>
                           <td> <%= table.get(i).getR() %></td>
                           <td> <%= table.get(i).getHit() %></td>
                           <td> <%= table.get(i).getExecutionTime() %></td>
                           <td> <%= table.get(i).getCurrentTime() %></td>
                           </tr>
                       <%}%>
                </tbody>
                </table></div>
            </div>
        </div>
        <script src="js/ajax.js"></script>
        <script src="js/sendData.js"></script>
        <script src="js/canvas.js"></script>
        <script src="js/currentTime.js"></script>
        <script src="js/inputForm.js"></script>
        <script src="js/validation.js"></script>
    </div>
    </main>
    </body>
</html>