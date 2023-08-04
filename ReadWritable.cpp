/* Citation and Sources...
 * Final Project Milestone 5
 * Module: ReadWritable
 * Filename: ReadWritable.cpp
 * Version 1.0
 * Author	Tilak Kawa
 * Revision History
 * -----------------------------------------------------------
 *  Date        Reason
 *  2022/11/23  Preliminary release
 *  2022/11/23  Debugged DMA
 *  -----------------------------------------------------------
 *  I have done all the coding by myself and only copied the code 
 *  that my professor provided to complete my project milestones.
 *  -----------------------------------------------------------
 *  */

#define _CRT_SECURE_NO_WARNINGS
#include "ReadWritable.h"

using namespace std;

namespace sdds {
	ReadWritable::ReadWritable() {
		isCSMode = false;
	}
	ReadWritable::~ReadWritable()
	{
	}
	bool ReadWritable::isCsv() const
	{
		return isCSMode;
	}
	void ReadWritable::setCsv(bool value)
	{
		isCSMode = value;
	}
	std::istream& operator>>(std::istream& istr, ReadWritable& readWritable)
	{
		return readWritable.read(istr);
	}
	std::ostream& operator<<(std::ostream& ostr, const ReadWritable& readWritable)
	{
		return readWritable.write(ostr);
	}
}