package com.example.test.api;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;
import lombok.Data;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Map;

@Data
@Component
public class ApiExplorer {

    public Map<String, Object> data() throws IOException {
        String jsonData = getDataFromApi();

        Gson gson = new Gson();
        Type type = new TypeToken<Map<String, Object>>(){}.getType();
        Map<String, Object> dataMap = gson.fromJson(jsonData, type);

        return dataMap;
    }

    public String getDataFromApi() throws IOException {
        StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/6260000/MedicInstitService/MedicalInstitInfo?serviceKey=ItY8M6amkjOdQ7Wk4sff7SLxiP5EcqEb7q6nEXJflalRc4iK7RbQqrzCBN7cENqXP1%2BnBPxZapkxjP%2BIWtav4Q%3D%3D&pageNo=1&numOfRows=6846&resultType=json");

        URL url = new URL(urlBuilder.toString());

        HttpURLConnection conn = (HttpURLConnection) url.openConnection();

        BufferedReader rd;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder jsonData = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            jsonData.append(line);
        }
        rd.close();
        conn.disconnect();

        return jsonData.toString();
    }
}
