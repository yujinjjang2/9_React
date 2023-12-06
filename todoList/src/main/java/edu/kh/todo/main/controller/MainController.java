package edu.kh.todo.main.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @Controller + @ResponseBody
// Json 형태로 객체 데이터로 반환
public class MainController {
	
	@GetMapping("/getPortNumber")
	// String만 들어있는 List를 반환하겠다
	public List<String> getPortNumber() {
		return Arrays.asList("서버포트는 8080", "리액트포트는 3000"); // Arrays.asList : 소괄호 안에 들어있는 데이터들을 List 형태로 만들어주고 반환
	}
	
	@PostMapping("/getUserInfo")
	public String getUserInfo(@RequestBody HashMap<String, Object> map) { // map -> {name : "홍길동", age : 20}
		System.out.println(map.get("name")); // 홍길동
		System.out.println(map.get("age")); // 20
		
		String message = "데이터가 없습니다"; // 둘 중에 하나라도 틀릴 시!
		
		if(map.get("name").equals("홍길동") && map.get("age").equals(20)) {
			message = "홍길동님은 20세 입니다";
		}
		
		return message;
	}

}
