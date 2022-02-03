package com.checkin.service;

import java.util.List;

import com.checkin.entity.CheckinDetails;

public interface CheckinService {
	
	public void addDetails(CheckinDetails userDetails); 
	public CheckinDetails findByPnrNo(long pnrNo);
	public List<CheckinDetails> getAllDetails();
}
