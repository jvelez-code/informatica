package com.udistrital.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;


//Inteface a modo de abtrtaer mas las cosaas que no la considere para que no pida una entidad
@NoRepositoryBean
public interface IGenericRepo<T, ID> extends JpaRepository<T, ID> {

}
