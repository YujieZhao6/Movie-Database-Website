package servlets;

import javax.naming.Context;
import javax.naming.InitialContext;
import java.sql.Connection;
import javax.sql.DataSource;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnector {
	private static final String url = "jdbc:mysql://127.0.0.1:3306/moviedb";
    private static final String userName = "";
    private static final String password = "";
    
    public static Connection getConnection() {

        Connection returnConn = null;
        try {
//            //load the driver
//            Class.forName("com.mysql.jdbc.Driver");
//            returnConn = DriverManager.getConnection(url, userName, password);

            // Obtain our environment naming context

            Context initCtx = new InitialContext();

            Context envCtx = (Context) initCtx.lookup("java:comp/env");

            // Look up our data source
            DataSource ds = (DataSource) envCtx.lookup("jdbc/moviedb");
            Connection dbcon = ds.getConnection();
            return  dbcon;
        } catch (Exception e){
            e.printStackTrace();
        }

        return returnConn;
    }
}
