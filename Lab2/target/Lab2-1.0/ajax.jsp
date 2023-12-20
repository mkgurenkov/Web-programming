<%@ page import="java.util.List" %>
<%@ page import="support.TableRow" %>
<% List<TableRow> table = (List<TableRow>) session.getAttribute("table"); %>
<tr>
<td> <%= table.get(table.size() - 1).getX() %></td>
<td> <%= table.get(table.size() - 1).getY() %></td>
<td> <%= table.get(table.size() - 1).getR() %></td>
<td> <%= table.get(table.size() - 1).getHit() %></td>
<td> <%= table.get(table.size() - 1).getExecutionTime() %></td>
<td> <%= table.get(table.size() - 1).getCurrentTime() %></td>
</tr>