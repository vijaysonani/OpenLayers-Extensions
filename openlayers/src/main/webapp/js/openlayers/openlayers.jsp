
<%
    String debug = Boolean.parseBoolean(request.getParameter("debug-qualifier")) ? "/lib" : "";
%>
<script type="text/javascript" src="${param['relPath']}js/openlayers<%= debug %>/OpenLayers.js"></script>
