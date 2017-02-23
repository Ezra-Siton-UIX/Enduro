var expect = require('chai').expect

var format_service = require(ENDURO_FOLDER + '/libs/services/format_service')

describe('Format service', function () {

	it('should enduro_sluggify strings', function () {
		expect(format_service.enduro_slug('Project Name')).to.equal('project_name')
		expect(format_service.enduro_slug('Project Name!.?')).to.equal('project_name')
		expect(format_service.enduro_slug('    ProJect NaMe')).to.equal('project_name')
		expect(format_service.enduro_slug('__ProJect NaMe__')).to.equal('project_name')
	})

	it('should prettify string', function () {
		expect(format_service.prettify_string('project_name')).to.equal('Project name')
		expect(format_service.prettify_string('project-name')).to.equal('Project name')
	})

})