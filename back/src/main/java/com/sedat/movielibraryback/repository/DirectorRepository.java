package com.sedat.movielibraryback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sedat.movielibraryback.model.Director;

public interface DirectorRepository  extends JpaRepository<Director, Long>{
	
	public Director findByName(String name);

}
